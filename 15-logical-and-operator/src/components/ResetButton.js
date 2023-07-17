function ResetButton({ resetCount, count }) {
  return (
    <div>
      {count > 0 && (
        <div>
          <button
            style={{ backgroundColor: 'lightgreen' }}
            onClick={resetCount}
          >
            Reset
          </button>
        </div>
      )}
    </div>
  )
}

export default ResetButton
